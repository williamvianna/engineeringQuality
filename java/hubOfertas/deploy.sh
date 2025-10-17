#!/bin/bash

set -e

oc project "$KUBE_NAMESPACE"

# Variaveis de esteira

if [ -z "$PROJECT_NAME_SLUG" ]; then
    echo 'ATENÇÃO! Declare a variável "$PROJECT_NAME_SLUG" como o slug do projeto para criação de recursos e definição de rota.'
    echo 'Dúvidas consulte documento http://confluence/pages/viewpage.action?pageId=90768994 ou equipe TECH Unix.'
    exit 1
fi

# Exibe recursos .yaml caso esteja em dev ou homolog
if [ "$CI_ENVIRONMENT_NAME" == "homolog" ] || [ "$CI_ENVIRONMENT_NAME" == "develop" ]; then
    echo ">> Displaying applicable yaml files"
    files=($(ls -1 ./openshift/[0-9]*.yaml))
    for yaml_file in "${files[@]}"; do
        echo "## File: \"${yaml_file}\":"
        cat "$yaml_file"
    done
fi

# Executando o deploy
# Exemplo de criacao de secret, descomente e configure para utilizar
# user --dry-run se a versão do oc cli for antiga, para mais recentes (4.6+) utilize --dry-run=client
oc create secret generic $PROJECT_NAME_SLUG --from-file=$CONFIG_FILE_PATH/.env --dry-run=client -o yaml > secret.yaml
oc apply -f secret.yaml

echo ">> Deploying image \"${IMAGE_NAME}:${IMAGE_TAG}\" to env \"$CI_ENVIRONMENT_NAME\" at \"$HOSTNAME\""
ls openshift/[0-9]*.yaml | xargs printf -- "-f %s\n" | xargs oc apply

echo ">> Deployed to https://$PROJECT_NAME_SLUG.$INGRESS_DOMAIN"
