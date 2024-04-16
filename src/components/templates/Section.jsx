export default function Section({ title, isH1, children }) {
    return (
        <section className="custom-container mx-auto ">
            {isH1 ? (
                <h1 className="xl:pt-32 xl:pb-10 xl:text-4xl md:pt-32 md:pb-10 md:text-3xl lg:text-4xl custom-padding">
                    {title}
                </h1>
            ) : (
                <h2 className="xl:pt-14 xl:pb-10 xl:text-4xl md:pt-10 md:pb-10 md:text-3xl lg:text-4xl custom-padding font-medium">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}
