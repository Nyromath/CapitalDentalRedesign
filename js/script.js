console.log("javascript");

//Home Nav Functionality
$(document).ready(function(){
  $("#servicesPage, #contactPage, #aboutPage").hide();

  $("#navHome").click(function(){
    $("#homePage").show();
    $("#servicesPage, #contactPage, #aboutPage").hide();
    $("#headerNav").toggleClass('active');
    $("#logo").toggleClass('inactive');
  });

  $("#logo").click(function(){
    $("#homePage").show();
    $("#servicesPage, #contactPage, #aboutPage").hide();
  });

  $("#navServices").click(function(){
    $("#servicesPage").show();
    $("#homePage, #contactPage, #aboutPage").hide();
    $("#headerNav").toggleClass('active');
    $("#logo").toggleClass('inactive');
  });

  $("#navContact").click(function(){
    $("#contactPage").show();
    $("#homePage, #servicesPage, #aboutPage").hide();
    $("#headerNav").toggleClass('active');
    $("#logo").toggleClass('inactive');
  });

  $("#navAbout").click(function(){
    $("#aboutPage").show();
    $("#homePage, #servicesPage, #contactPage").hide();
    $("#headerNav").toggleClass('active');
    $("#logo").toggleClass('inactive');
  });
});

//Home Nav Mobile Toggle Visibility
$(document).ready(function(){
  $(".menuBars").click(function(){
    $("#headerNav").toggleClass('active');
    $("#logo").toggleClass('inactive');
  });
});

//Services Nav Mobile Toggle Visibility
$(document).ready(function(){
  $(".servicesNavChev").click(function(){
    $("#servicesNavBar").toggleClass('active');
  });
});

//Services Nav Functionality
$(document).ready(function(){
  $("#servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
  $("#servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();

  $("#navDentalCheckup").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoDentalCheckup, #servicesRightDentalCheckup").show();
    $("#servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navDentalHygiene").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoDentalHygiene, #servicesRightDentalHygiene").show();
    $("#servicesInfoDentalCheckup, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navFissureSealants").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoFissureSealants, #servicesRightFissureSealants").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navNightGuards").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoNightGuards, #servicesRightNightGuards").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navFillings").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoFillings, #servicesRightFillings").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navRootCanals").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoRootCanals, #servicesRightRootCanals").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navDentures").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoDentures, #servicesRightDentures").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navTeethWhitening").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoTeethWhitening, #servicesRightTeethWhitening").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navCrowns").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoCrowns, #servicesRightCrowns").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navBridges").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoBridges, #servicesRightBridges").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navBotox").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoBotox, #servicesRightBotox").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navFastbraces").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoFastbraces, #servicesRightFastbraces").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navInvisalign").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoInvisalign, #servicesRightInvisalign").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navDentalImplants").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoDentalImplants, #servicesRightDentalImplants").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navWisdomTeeth").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoWisdomTeeth, #servicesRightWisdomTeeth").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoOralSedation, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightOralSedation, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navOralSedation").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoOralSedation, #servicesRightOralSedation").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoIVSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightIVSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navIVSedation").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoIVSedation, #servicesRightIVSedation").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoDentalSleepMedicine").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightDentalSleepMedicine").hide();
  });

  $("#navDentalSleepMedicine").click(function(){
    $("#servicesNavBar").toggleClass('active');
    $("#servicesInfoDentalSleepMedicine, #servicesRightDentalSleepMedicine").show();
    $("#servicesInfoDentalCheckup, #servicesInfoDentalHygiene, #servicesInfoFissureSealants, #servicesInfoNightGuards, #servicesInfoFillings, #servicesInfoRootCanals, #servicesInfoDentures, #servicesInfoTeethWhitening, #servicesInfoCrowns, #servicesInfoBridges, #servicesInfoBotox, #servicesInfoFastbraces, #servicesInfoInvisalign, #servicesInfoDentalImplants, #servicesInfoWisdomTeeth, #servicesInfoOralSedation, #servicesInfoIVSedation").hide();
    $("#servicesRightDentalCheckup, #servicesRightDentalHygiene, #servicesRightFissureSealants, #servicesRightNightGuards, #servicesRightFillings, #servicesRightRootCanals, #servicesRightDentures, #servicesRightTeethWhitening, #servicesRightCrowns, #servicesRightBridges, #servicesRightBotox, #servicesRightFastbraces, #servicesRightInvisalign, #servicesRightDentalImplants, #servicesRightWisdomTeeth, #servicesRightOralSedation, #servicesRightIVSedation").hide();
  });

  //Services Book Now button
  $(".servicesBooking").click(function(){
    $("#servicesPage").hide();
    $("#contactPage").show();
  });
});
