<script>
export default {};
</script>

<template lang="">
  <div class="container0">

    <div class="container1">
      <div class="profil">
        <div class="icon"><img src="../assets/Mickael/message.png" class="iconProfil"></div>
        <div class="NomUser">nom user</div>
      </div>
      <div class="ListesMessages">
        <div>
          <div class="recherche">
            <input type="text" placeholder="Matricule">
            <button type="submit" class="btn-recherche">
              <img src="../assets/Mickael/recherche.png" class="iconRecherche">
            </button>
          </div>
          <div class="Discusion">
            <div class="Discu">
              <img src="../assets/Mickael/ispm.png" class="iconP">
              <div style="display: flex; flex-direction: column; padding-left: 5px">
                <div>Nom : M 190 678</div>
                <div>Message</div>
              </div>
            </div>
          </div>
        </div>
        <div class="MessageAdmin">
          <img src="../assets/Mickael/iconProfil.png" class="iconP">
        </div>
      </div>
    </div>

    <div class="container2">
      
      <div class="MesMessages">
        <div class="MessageAutre">
          <img src="../assets/Mickael/icon.png" class="iconP">
            <div class="MessageA" style="margin-left: 5px">
              <div style="font-size: 12px">11/12/20 12:10</div>
              <div>Un petit message que j'envoie à quelqu'un</div>
            </div>
        </div>
        <div class="MessageMoi">
          <div class="MessageM"  style="margin-right: 5px">
            <div style="font-size: 12px">11/12/20 12:10</div>
            <div>Un petit message que j'envoie à quelqu'un</div>
          </div>
          <img src="../assets/Mickael/ispm.png" class="iconP">          
        </div>
      </div>

      <div class="Ecrire">
        <input type="text" placeholder="Ecrire un message" class="input-ecrire">
        <button type="submit" class="envoyer" >Send <img src="../assets/Mickael/envoyer.png" class="iconRecherche"></button>
      </div>

    </div>

  </div>
</template>

<style>
.MesMessages {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.Ecrire {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
}
.input-ecrire {
  background-color: #4E272E;
  color: white;
  width: 100%;
}
.envoyer {
  border-radius: 15px;
  background-color: #ffffff;
}
.profil {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #018585;
  border-radius: 25px;
  box-shadow: 1px 1px 10px black;
  padding: 5px;
}
.iconProfil {
  width: 75px;
  height: 75px;
}
.iconP {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.NomUser {
  padding: 5px;
  justify-content: center;
  align-items: center;
}

.ListesMessages {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #8C4A00;
  margin-top: 15px;
  border-radius: 25px;
  padding: 5px;
  box-shadow: 1px 1px 10px black;
  height: 100%;
}
.recherche {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 100%;
}
.iconRecherche {
  width: 30px;
  height: 30px;
}
.btn-recherche {
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 14px;
}

.Discu {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 75px;
  margin: 10px 0px;
  border: 2px solid white;
  border-radius: 25px;
  padding: 5px;
}
input {
  padding: 5px;
  border-radius: 15px;
}
.MessageAdmin {
  display: flex;
  justify-content: right;
}
.MessageAutre {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 5px;
  margin: 10px 0px;
}
.MessageA {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color: rgba(71, 14, 204, 0.849);
  border: 2px solid rgb(71, 14, 204);
  border-radius: 25px;
  padding: 15px;
}
.MessageMoi {
  display: flex;
  flex-direction: row;
  justify-content: right; 
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 5px;
  margin: 10px 0px;
}
.MessageM {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color: #6c823ad5;
  border: 2px solid #3b9900;
  border-radius: 25px;
  padding: 15px;
}

.container0 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #0000006e;
  background-image: url('../assets/Mickael/discu.png');
  color: white;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 5px;
}
.container1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  height: 100%;
  padding: 5px;
}
.container2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  height: 100%;
  background-color: #005075d5;
  padding: 5px;
  border-radius: 25px;
  box-shadow: 1px 1px 10px black;
}
</style>
