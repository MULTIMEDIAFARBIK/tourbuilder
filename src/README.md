# 360ty_tourbuilder
# pano2vr_player.js updaten

1. Ausgabe aus Pano2VR erstellen. Checke dabei, dass die neuste Version von Pano2VR installiert ist.
2. Aus der Ausgabe das pano2vr_player.js file kopieren und in diesem Projekt ersetzen
3. Neues pano2vr_player.js file öffnen und nach "window.pano2vrPlayer=" suchen und den zugewiesen wert kopieren. Beispiel: _window.pano2vrPlayer=ggP2VR.jc_ => _ggP2VR.jc_ kopieren
4. am Ende der datei einen default export der kopierten variable erstellen. Beispiel: export default ggP2VR.jc