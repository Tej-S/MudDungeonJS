"use strict";

var player = function(playerInfo) {
    this.socket = '';
    this.name = playerInfo.name || '';
    this.description = playerInfo.description || 'You see nothing special about them';
    this.age = playerInfo.age || 18;
    this.information = {
        level: playerInfo.level || 1,
        race: playerInfo.race || '',
        class: playerInfo.class || '',
        alignment: playerInfo.alignment || '',
        alignmentScore: 0,
        experience: 0,
        experienceToNextLevel: 0,
        maxHitpoints: 0,
        hitpoints: 0,
        maxMana: 0,
        mana: 0,
        stats: {
            strength: playerInfo.information.stats.strength || 0,
            dexterity: playerInfo.information.stats.dexterity || 0,
            constitution: playerInfo.information.stats.constitution || 0,
            intelligence: playerInfo.information.stats.intelligence || 0,
            wisdom: playerInfo.information.stats.wisdom || 0,
            charisma: playerInfo.information.stats.charisma || 0
        }
    };
    this.location = {
        region: playerInfo.location.region || '',
        area: playerInfo.location.area || '',
        areaID:  playerInfo.location.areaID || 0,
        coordsY: 0,
        coordsX: 0
    };
    this.password = playerInfo.password;
    this.inventory = [];
    this.equipment = {
      floating: playerInfo.equipment.floating || "Nothing",
      light: playerInfo.equipment.light || "Nothing",
      head: playerInfo.equipment.head || "Nothing",
      leftEar:  playerInfo.equipment.leftEar || "Nothing",
      rightEar:  playerInfo.equipment.rightEar || "Nothing",
      neck:  playerInfo.equipment.neck || "Nothing",
      cloak:  playerInfo.equipment.cloak || "Nothing",
      aboutBody:  playerInfo.equipment.aboutBody || "Nothing",
      body:  playerInfo.equipment.body || "Nothing",
      waist:  playerInfo.equipment.waist || "Nothing",
      leftSheath:  playerInfo.equipment.leftSheath || "Nothing",
      rightSheath:  playerInfo.equipment.rightSheath || "Nothing",
      back:  playerInfo.equipment.back || "Nothing",
      leftWrist:  playerInfo.equipment.leftWrist || "Nothing",
      rightWrist:  playerInfo.equipment.rightWrist || "Nothing",
      leftHand: playerInfo.equipment.leftHand || "Nothing",
      rightHand: playerInfo.equipment.rightHand || "Nothing",
      leftRing: playerInfo.equipment.leftRing || "Nothing",
      rightRing: playerInfo.equipment.rightRing || "Nothing",
      legs:  playerInfo.equipment.legs || "Nothing",
      feet:  playerInfo.equipment.feet || "Nothing",
    };
    this.explored = 0;
    this.questPoints = 0;
    this.gold = 0;
    this.silver = 0;
    this.copper = 0;

    //Get
    this.getInfo = function() {
        return JSON.stringify(player);
    };

    this.getName = function() {
        return this.name;
    };
    this.getDescription = function() {
        return this.description;
    };
    this.getLocation = function() {
        return JSON.stringify(this.location);
    };
    this.getInformation = function() {
        return this.information;
    };
    this.getSocket = function() {
        return this.socket;
    };
    this.getInventory = function() {

      var inventory = this.inventory;
      var inv = inventory.length;
      var invObj = new Object();

      while (inv--) {
        invObj[inv] = inventory[inv].name
       }

      return invObj;
    };

    //Set
    this.setDescription = function(description) {
        this.description = description;
    };

    this.setSocket = function(socket) {
        this.socket = socket;
    };

    this.setLocation = function(region, area, areaID) {
        this.location.region = region;
        this.location.area = area;
        this.location.areaID = areaID;
    };

    this.setInventory = function(inventory) {

      if (typeof inventory === 'object')
      {
          this.inventory.push(inventory)
      }
      else
      {
        console.log('Must insert object to inventory array');
      }

    };

  this.savePlayer = function(playerinfo) {
   //modules.data.savePlayer(player);
  }




}

exports.player = player;