import { Injectable } from '@angular/core';
import { Produkt, PRODUKTE } from 'src/app/data/product-data';

@Injectable({
  providedIn: 'root'
})
export class AuswahlService {
  private readonly STORAGE_KEY = 'meine-auswahl';

  getAuswahl(): Produkt[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }


  addProdukt(produkt: Produkt): void {
    if (typeof window === 'undefined') return;
  
    let auswahl = this.getAuswahl();
  
    // Wenn Produkt noch nicht enthalten → hinzufügen
    if (!auswahl.find(p => p.id === produkt.id)) {
      auswahl.push(produkt);
    }
  
    // Pakete nach Größe (längste zuerst → All-In)
    const sortiertePakete = [...this.PAKETE].sort(
      (a, b) => b.komponenten.length - a.komponenten.length
    );
  
    for (const paket of sortiertePakete) {
      const aktuelleIds = auswahl.map(p => p.id);
      const hatAlle = paket.komponenten.every(id => aktuelleIds.includes(id));
      const hatPaketSchon = aktuelleIds.includes(paket.id);
  
      if (hatAlle && !hatPaketSchon) {
        // Entferne alle Einzelkomponenten des Pakets
        auswahl = auswahl.filter(p => !paket.komponenten.includes(p.id));
  
        // Füge das Paket hinzu
        const paketProdukt = PRODUKTE.find(p => p.id === paket.id);
        if (paketProdukt) {
          auswahl.push(paketProdukt);
        }
  
        // ⚠️ Da das größte passende Paket gefunden wurde, stoppen!
        break;
      }
    }
  
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(auswahl));
  }
  
  
  


  removeProdukt(id: string): void {
    if (typeof window === 'undefined') return;
    const auswahl = this.getAuswahl().filter(p => p.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(auswahl));
  }


  isAusgewaehlt(id: string): boolean {
    if (typeof window === 'undefined') return false;
    return this.getAuswahl().some(p => p.id === id);
  }


  clear(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private readonly PAKETE = [
    {
      id: 'paket-party',
      title: 'Party-Paket',
      komponenten: ['musikanlage', 'laser']
    },
    {
      id: 'paket-sport',
      title: 'Sportpaket',
      komponenten: ['sportbox', 'riesen-jenga', 'darts']
    },
    {
      id: 'paket-allin',
      title: 'All-In Paket',
      komponenten: ['musikanlage', 'laser', 'sportbox', 'riesen-jenga', 'darts', 'lichter']
    }
  ];
  
}
