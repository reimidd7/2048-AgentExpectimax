// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
   // console.log("Creating GameManager instance");
    var gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
   // console.log("GameManager instance created:", gm);

   // console.log("Creating AgentManager instance");
    var agent = new AgentManager(gm);
   // console.log("AgentManager instance created:", agent);

   // console.log("Assigning agent to gm.agent");
    gm.agent = agent;
    //console.log("Agent assigned to gm.agent:", gm.agent);

    gm.setup();
});
