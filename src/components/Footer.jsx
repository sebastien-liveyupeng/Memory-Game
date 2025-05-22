const personsDefault = [
    { name: "Lamine", link: "https://github.com/mamadoulamine-diallo" },
    { name: "Sébastien", link: "https://github.com/sebastien-liveyupeng" },
    { name: "Antoine", link: "https://github.com/antoine-leca" }
]

function Footer({ persons = personsDefault }) {
    const personLinks = persons.map((person, index) => {
        const isLast = index === persons.length - 1;
        const isSecondLast = index === persons.length - 2;

        return (
            <span key={person.name}>
                <a href={person.link} target="blank">{person.name}</a>
                {isSecondLast ? " & " : (!isLast ? ", " : "")}
            </span>
        );
    });

    return (
        <footer>
            <p>Jeu créé par {personLinks}</p>
        </footer>
    );
}

export default Footer;