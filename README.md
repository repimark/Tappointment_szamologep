# Tappointment_szamologep
Tappointment Interview feladat (Számológép)

### Q:
"Kérlek, írd össze, hogy mit változtatnál a fentiekhez képest, ha egy skálázható, több szerveres környezetben kellene üzemeltetni a kódot, akár több ezer felhasználóval."

### A: 
- Leklónoznám a projektet és egyszerre több szerverre feltenném vagy egy szerverre de több porton futna, emelett loadbalancert használnék a terhelés elosztás végett. Ez lehet egy haproxy is.
- Miután az alkalmazás amit készítettem 2 részből áll így microservice-nek mondható ezért rábíznám egy felhő platformra pl kubernetes ahol a szükséges architektúra megtervezése és config fájlok elkészítése után, ügyesen megoldaná a terhelés elosztást.

# Feladatok: 

## Számológép

A feladat egy egyszerű számológép elkészítése,  webes technológiákkal. Két részre bontottuk a feladatot, backendre és frontendre:
A feladatokat felvittem a github saját [Kanban](https://github.com/repimark/Tappointment_szamologep/projects/1) táblájára



