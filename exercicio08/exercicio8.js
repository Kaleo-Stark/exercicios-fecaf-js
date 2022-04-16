// ##################################################################################
                                                                                   //
    var idadePessoa1 = 22;                                                         //
    var idadePessoa2 = 30;                                                         //
                                                                                   //
    let duasPessoasVelhas = idadePessoa1 >= 60 && idadePessoa2 >= 60; // ... False //
    let duasPessoasNovas  = idadePessoa1 < 60 && idadePessoa2 < 60; // ..... True  //
                                                                                   //
// ##################################################################################
                                                                                   //
    // ... Temperatura café                                                        //
    var cafeGarrafa = 40;                                                          //
    var cafeCopo = 20;                                                             //
                                                                                   //
    let algumCafeEsfriando = cafeCopo <= 20 || cafeGarrafa <= 20; // ....... True  //
    let algumCafeQuente = cafeCopo > 20 || cafeGarrafa > 20; // ............ True  //
                                                                                   //
// ##################################################################################
                                                                                   //
    var bateria = 20;                                                              //
                                                                                   //
    let precisaCarregar = !bateria > 40; // ................................ false //
    let naoPrecisaCarregar = !bateria < 20; // ............................. True  //
                                                                                   //
// ##################################################################################
                                                                                   //
    var volumeLigado = true;                                                       //
                                                                                   //
    let comVolume = volume ^ false; // ..................................... 1     //
    let semVolume = volume ^ true // ....................................... 0     //
                                                                                   //
// ##################################################################################
