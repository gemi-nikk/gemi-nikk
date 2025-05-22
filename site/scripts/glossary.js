const glossaryEntries = [
    {
        term: "BSE (Bombay Stock Exchange)",
        description: "One of Asia's oldest stock exchanges, located in Mumbai, India. It is the world's 10th largest stock exchange by market capitalization."
    },
    {
        term: "NSE (National Stock Exchange of India)",
        description: "The leading stock exchange of India, located in Mumbai. It is the largest stock exchange in India by total and average daily turnover for equities."
    },
    {
        term: "Sensex",
        description: "The benchmark index of the BSE, comprising 30 well-established and financially sound companies listed on the Bombay Stock Exchange."
    },
    {
        term: "Nifty 50",
        description: "The benchmark index of the NSE, representing the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange."
    },
    {
        term: "IPO (Initial Public Offering)",
        description: "The process by which a private company can go public by offering its shares to the public for the first time. It's a significant event for a company to raise capital from public investors."
    },
];
const mainElement = document.getElementById('creating-a-glossary');
 {
    const h1 = document.createElement('h1');
    h1.textContent = 'Indian Stock Market Glossary';
    mainElement.appendChild(h1);
    const dl = document.createElement('dl');
    mainElement.appendChild(dl);
    glossaryEntries.forEach(entry => {
        const dt = document.createElement('dt');
        dt.textContent = entry.term;
        dl.appendChild(dt);
        const dd = document.createElement('dd');
        dd.textContent = entry.description;
        dl.appendChild(dd);
    });
}
