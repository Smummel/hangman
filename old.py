import random

# Klass för att hantera ordlistan från fil
class OrdLista:
    def __init__(self, filnamn):
        self.filnamn = filnamn
        self.ord = self.ladda_ord()

    def ladda_ord(self):
        try:
            with open(self.filnamn, 'r', encoding='utf-8') as fil:
                return [rad.strip().lower() for rad in fil if rad.strip()]
        except FileNotFoundError:
            print(f"Filen {self.filnamn} hittades inte.")
            return []

    def slumpa_ord(self):
        return random.choice(self.ord) if self.ord else None

# Klass för själva spelet
class OrdSpel:
    def __init__(self, ordlista):
        self.ord = ordlista.slumpa_ord()
        self.gissade_bokstäver = set()
        self.max_fel = 6
        self.fel = 0

    def visa_ord(self):
        return ' '.join([bokstav if bokstav in self.gissade_bokstäver else '_' for bokstav in self.ord])

    def gissa(self, bokstav):
        bokstav = bokstav.lower()
        if bokstav in self.gissade_bokstäver:
            print("Du har redan gissat den bokstaven.")
        elif bokstav in self.ord:
            print("Rätt gissat!")
            self.gissade_bokstäver.add(bokstav)
        else:
            print("Fel gissat.")
            self.fel += 1
            self.gissade_bokstäver.add(bokstav)

    def spelet_är_vunnet(self):
        return all(bokstav in self.gissade_bokstäver for bokstav in self.ord)

    def spelet_är_slut(self):
        return self.fel >= self.max_fel or self.spelet_är_vunnet()

    def starta(self):
        if not self.ord:
            print("Ingen ord att spela med.")
            return

        print("🎮 Välkommen till Ordgissningsspelet!\n")

        while not self.spelet_är_slut():
            print("\nOrdet:", self.visa_ord())
            print(f"Felgissningar: {self.fel} av {self.max_fel}")
            gissning = input("Gissa en bokstav: ").strip().lower()

            if len(gissning) != 1 or not gissning.isalpha():
                print("Ange EN giltig bokstav.")
                continue

            self.gissa(gissning)

        if self.spelet_är_vunnet():
            print(f"\n🎉 Grattis! Du gissade ordet: {self.ord}")
        else:
            print(f"\n💀 Spelet är över. Ordet var: {self.ord}")

# Starta spelet
if __name__ == "__main__":
    ordlista = OrdLista("ordlista.txt")
    spel = OrdSpel(ordlista)
    spel.starta()