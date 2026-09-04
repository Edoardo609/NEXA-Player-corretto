// NEXA Player audio engine: keeps playback synchronous with the user gesture.
(function(){
  window.NEXAAudioEngine={
    async resume(ctx){try{if(ctx&&ctx.state==='suspended')await ctx.resume();return !ctx||ctx.state==='running'}catch(e){return false}}
  };
})();