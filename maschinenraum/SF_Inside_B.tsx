<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.5.0" name="SF_Inside_B" tilewidth="32" tileheight="32" tilecount="256" columns="16">
 <image source="SF_Inside_B.png" trans="ff00ff" width="512" height="512"/>
 <tile id="9">
  <animation>
   <frame tileid="9" duration="800"/>
   <frame tileid="8" duration="4000"/>
  </animation>
 </tile>
 <tile id="13">
  <animation>
   <frame tileid="13" duration="1300"/>
   <frame tileid="14" duration="1300"/>
  </animation>
 </tile>
 <tile id="63">
  <objectgroup draworder="index">
   <object id="1" x="31.8129" y="5.10367">
    <polygon points="-0.170122,11.8235 -31.1324,11.9936 -31.5577,25.4333 -0.170122,25.3482"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="108">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="124">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="127">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="136">
  <objectgroup draworder="index">
   <object id="1" x="0.170122" y="0.425306">
    <polygon points="0,0 -0.0850611,30.9623 31.8129,31.3025 31.3025,-0.170122"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="152">
  <objectgroup draworder="index">
   <object id="1" x="0.340245" y="0.170122">
    <polygon points="0,0 -0.255183,31.7278 31.3876,31.983 31.4726,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="171">
  <objectgroup draworder="index">
   <object id="1" x="9.95215" y="10.2924"/>
   <object id="2" x="22.201" y="10.0372"/>
   <object id="3" x="22.286" y="21.9458"/>
   <object id="4" x="10.2073" y="21.8607"/>
  </objectgroup>
 </tile>
 <tile id="187">
  <objectgroup draworder="index">
   <object id="1" x="9.69697" y="9.86709"/>
   <object id="2" x="21.7757" y="10.1223"/>
   <object id="3" x="21.9458" y="21.7757"/>
   <object id="4" x="9.86709" y="21.8607"/>
  </objectgroup>
 </tile>
</tileset>
