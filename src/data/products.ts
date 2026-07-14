export interface Product {
  id: string;
  name: string;
  category: string;
  icon: "shirt" | "swords";
  /** PLACEHOLDER: descrizione generica da rivedere con contenuti reali. */
  description: string;
}

export const products: Product[] = [
  {
    id: "maglietta-training",
    name: "Maglietta Training",
    category: "Abbigliamento",
    icon: "shirt",
    description:
      "Maglietta tecnica Team Salim, pensata per gli allenamenti in palestra: tessuto leggero e traspirante per accompagnarti in ogni sessione, dal riscaldamento allo sparring.",
  },
  {
    id: "pantaloncini-muay-thai",
    name: "Pantaloncini Muay Thai",
    category: "Abbigliamento",
    icon: "shirt",
    description:
      "Pantaloncini da Muay Thai in stile tradizionale, taglio ampio per la massima libertà di movimento su calci e ginocchiate, con i colori Team Salim.",
  },
  {
    id: "felpa-team-salim",
    name: "Felpa Team Salim",
    category: "Abbigliamento",
    icon: "shirt",
    description:
      "Felpa ufficiale Team Salim, perfetta da indossare prima e dopo l'allenamento o semplicemente per portare i colori della palestra fuori dal tatami.",
  },
  {
    id: "guantoni-training",
    name: "Guantoni da Training",
    category: "Attrezzatura",
    icon: "swords",
    description:
      "Guantoni da training Team Salim, imbottitura pensata per sacco e sparring leggero, per allenarti in sicurezza con la qualità che la palestra richiede.",
  },
];
