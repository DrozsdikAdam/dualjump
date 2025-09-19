# DualJump

A **DualJump** egy egyszerű VS Code bővítmény, amellyel két fájl között lehet váltani, valamint könnyen mountolni és unmountolni őket gyors billentyűparancsokkal. Hasznos, ha két fájl között kell gyakran ugrálnod munka közben.

---

## Funkciók

- **Mount File A**: Az aktuális fájlt az "A" slotba helyezi.
- **Mount File B**: Az aktuális fájlt a "B" slotba helyezi.
- **Unmount Current File**: Leveszi a mount-ot arról a fájlról, amelyben éppen vagy.
- **Toggle Between Files**: Váltás az "A" és "B" fájl között.

---

## Billentyűparancsok

| Billentyűparancs | Művelet              |
| ---------------- | -------------------- |
| `Ctrl + Alt + ↑` | Mount File           |
| `Ctrl + Alt + ↓` | Unmount Current File |
| `Ctrl + Alt + ←` | Switch To File A     |
| `Ctrl + Alt + →` | Switch To File B     |

---

## Telepítés VSIX fájlból

Az alábbi linken letöltheted a `.vsix` fájlt, és manuálisan telepítheted a vs code-ba és internet nélkül is használhatod:

[Letöltés VSIX fájlból](https://github.com/DrozsdikAdam/dualjump/releases/tag/v0.0.1/dualjump-0.0.2.vsix)

## Telepítés

Telepítsd VS Code-ban:

Nyisd meg a Command Palette-et (Ctrl+Shift+P).

Keresd meg: Extensions: Install from VSIX.

Válaszd ki a .vsix fájlt.
