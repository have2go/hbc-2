export default function Section({ title, isH1, children }) {
    return (
        <section className="custom-container mx-auto">
            {isH1 ? (
                <h1 className="xl:pt-40 xl:pb-14 xl:text-5xl md:pt-32 md:pb-10 md:text-3xl lg:text-4xl custom-padding">{title}</h1>
            ) : (
                <h2 className="xl:pt-20 xl:pb-14 xl:text-5xl md:pt-10 md:pb-10 md:text-3xl lg:text-4xl custom-padding">{title}</h2>
            )}
            {children}
        </section>
    );
}
