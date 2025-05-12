export interface Produkt {
    id: string;
    title: string;
    imageUrl: string;
    imageUrls?: string[];
    price: number;
    description: string;
    items?: string[];
    services?: string[];
  }
  
  export const PRODUKTE: Produkt[] = [
    {
      id: 'musikanlage',
      title: 'Musikanlage',
      imageUrl: 'assets/musikanlage.jpg',
      price: 60,
      description: 'Diese Musikanlage bringt einen tollen Sound auf jede Veranstaltung. Diese kommt zusätztlich mit einem großen Subwoofer, der für einen satten Bass sorgt. Die Bedienung ist sehr einfach über das Handy mit Bluetooth oder über das AUX-Kabel. Die Musikanlage ist einzeln buchbar oder als Kombination mit der Laser-Lichtanlage für eine sehr schöne Party-Atmosphäre für nur 70€.',
      services: [
        "Aufbau der Anlage",
        "Einrichten der Verbindung zum Handy",
        "Einweisung in die Bedienung der Anlage",
      ]
    },
    {
      id: 'sportbox',
      title: 'Sportbox',
      imageUrl: 'assets/sportbox.jpg',
      imageUrls: ['assets/sportbox.jpg', 'assets/sportbox_2.jpg','assets/sportbox_3.jpg','assets/sportbox_4.jpg','assets/sportbox_5.jpg','assets/sportbox_6.jpg','assets/sportbox_7.jpg'],
      price: 20,
      description: 'Diese Sportbox enthält eine Vielzahl an Sportgeräten für viel Spiel und Spaß.',
      items: [
        '2x Fußball',
        '2x leichter Plastikfußball',
        '2x Volleyball',
        '1x Wurfrakete',
        '1x Frisbee-Wurfring',
        '1x Ballpumpe',
        '1x Badmintonset (2x Schläger, 2x Federball)',
        '1x Wikinger-Schach',
      ]
    },
    
    {
      id: 'darts',
      title: 'Darts',
      imageUrl: 'assets/dartscheibe.jpg',
      price: 20,
      description: 'Eine Klassische Dartscheibe für alle Altersgruppen. Sie ist einfach zu bewegen und kann überall verwendet werden. Die Dartscheibe ist aus hochwertigem Material gefertigt.'
    },
    {
      id: 'riesen-jenga',
      title: 'Riesen-Jenga',
      imageUrl: 'assets/riesen_jenga.jpg',
      price: 10,
      description: 'Das strategische Holzspiel für alle Altersgruppen. Baue einen Turm aus Holzklötzen und ziehe abwechselnd einen Block heraus, ohne dass der Turm umfällt. Das Spiel fördert Geschicklichkeit und Konzentration und sorgt für jede Menge Spaß.'
    },
    {
      id: 'laser',
      title: 'Laser-Lichtanlage',
      imageUrl: 'assets/laser.png',
      price: 20,
      description: 'Diese Laser-Lichtanlage sorgt für eine coole Party-Atmosphäre. Sie ist einfach zu bedienen und kann in verschiedenen Modi betrieben werden, z.B. im Musikmodus, wo die Lichter im Takt der Musik leuchten. Die Laser-Lichtanlage ist einzeln buchbar oder zusammen mit der Musikanlage für nur 70€.',
      services: [
        "Aufbau der Anlage",
        "Einrichten der Verbindung zum Handy",
        "Einweisung in die Bedienung der Anlage",
      ]
    },
    {
      id: 'paket-sport',
      title: '🏀 Sportpaket',
      imageUrl: 'assets/sport_paket.jpg',
      imageUrls: ['assets/dartscheibe.jpg', 'assets/riesen_jenga.jpg','assets/sportbox.jpg'],
      price: 40,
      description: 'Unser Sportpaket kombiniert Bewegung und Spaß für alle Altersgruppen. Ideal für Gruppen, Familien und Kindergeburtstage.',
      items: [
        'Sportbox',
        'Riesen-Jenga',
        'Darts'
      ]
    },
    {
      id: 'paket-party',
      title: '🎉 party_paket',
      imageUrl: 'assets/party_paket.png',
      imageUrls: ['assets/musikanlage.jpg', 'assets/laser.png'],
      price: 70,
      description: 'Partyfeeling garantiert – unser Party-Paket besteht aus der kraftvollen Musikanlage und der farbenfrohen Laser-Lichtanlage.',
      items: [
        'Musikanlage',
        'Laser-Lichtanlage'
      ],
      services: [
        "Aufbau der Technik",
        "Einweisung in die Bedienung",
        "Verbindungsaufbau mit Handy (Bluetooth oder AUX)"
      ]
    },
    {
      id: 'paket-allin',
      title: '🔥 All-In Paket',
      imageUrl: 'assets/paket_allin.png',
      imageUrls: ['assets/musikanlage.jpg', 'assets/laser.png','assets/sportbox.jpg','assets/riesen_jenga.jpg','assets/dartscheibe.jpg'],
      price: 100,
      description: 'Das All-In-Paket enthält alle Extras – für maximale Ausstattung und stressfreies Event-Feeling zum Vorteilspreis.',
      items: [
        'Musikanlage',
        'Laser-Lichtanlage',
        'Sportbox',
        'Riesen-Jenga',
        'Dartscheibe',
      ],
      services: [
        "Kompletter Aufbau aller Geräte",
        "Einweisung in alle Systeme",
        "Technikcheck am Miettag"
      ]
    }    
    
  ];
  