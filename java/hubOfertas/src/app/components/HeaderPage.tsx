import {Breadcrumbs, Link, Typography, useTheme} from "@mui/material";
import NextLink from "next/link";
import styles from '../page.module.css'
import {inter} from "@/app/utils/fonts";
import mappedRoutes from "@/app/utils/mappedRoutes.json";
import {usePathname} from "next/navigation";


export default function HeaderPage() {

    const paths = usePathname();
    const pathnames = paths.split('/').filter(x => x);

    function getTitle() {
        const currentRoute = mappedRoutes.find(r => r.url.replaceAll('/', '') === pathnames.at(-1));
        return currentRoute ? currentRoute.name : pathnames.at(-1)
    }

    const theme = useTheme()

    return (
        <section className={`${styles.headerpage} ${inter.className}`} style={{'backgroundColor': theme.palette.primary.main+'09'}}>
            <div>
                <div className={styles.headerpageTitle}>
                    <Typography variant="h5" fontFamily={inter.style.fontFamily} fontWeight="600" textTransform="capitalize" color={theme.palette.primary.main} >
                        {getTitle()}
                    </Typography>
                </div>
                <div className={styles.headerpageBreadcrumb}>
                    <Breadcrumbs aria-label="Breadcrumb">
                        <Link component={NextLink} underline="hover" color="primary" href="/home" fontFamily={inter.style.fontFamily} fontWeight={500} fontSize={13}>
                            Home
                        </Link>
                        {pathnames.map((value, index) => {
                            const last = index === pathnames.length - 1;
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const mappedRoute = mappedRoutes.find(r => r.url === to)

                            if (last) {
                                if (value !== 'home') {
                                    return (
                                        <Typography color="inherit" key={to} fontFamily={inter.style.fontFamily} fontWeight={500} fontSize={13}>
                                            {mappedRoute ? mappedRoute.name : value}
                                        </Typography>)
                                }
                                return null;
                            } else {
                                return (
                                    <Link component={NextLink} underline="hover" key={to} color="primary" href={to} fontFamily={inter.style.fontFamily} fontWeight={500} fontSize={13}>
                                        {mappedRoute ? mappedRoute.name : value}
                                    </Link>
                                )
                            }
                        })}
                    </Breadcrumbs>
                </div>
            </div>
        </section>
    );
}
