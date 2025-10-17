import { Header } from "../components/Header";
import { FormCreate } from "../components/Services/FormCreate";
import { ServicesProvider } from "../providers/Services";

export default function Services() {

    return (
        <ServicesProvider>
            <main className="w-full md:max-w-[900px] 2xl:max-w-[1200px] mx-auto">
                <Header />
                <div className="w-full flex mt-28">

                    <div className="w-full">
                        <FormCreate />
                    </div>
                </div>
            </main>
        </ServicesProvider>
    )
}
