


// 1. stack

/**
 *
 * a memory , which executes things ( functions ) in 'LIFO' principle
 *
 */


// // #1
// //-------------------------------------------------

// debugger;
// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz()

//  //-------------------------------------------------

// #2
//-------------------------------------------------

// function foo(){throw Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz()

//-------------------------------------------------


// #3
//-------------------------------------------------

// function baz() {
//     baz()
// }
// baz()


//-------------------------------------------------



// #4
//-------------------------------------------------

function longRunning() {
   var i = 0
   while (i < 10) {
      console.log("im long....")
      i++
   }
}
// function shortRunning() {
//     console.log("im short..")
// }

// longRunning()
// shortRunning()


//-------------------------------------------------
// 99% of jvascript code runs on event
//-------------------------------------------------


// on event , how js-engine  executing function

// e.g DOM Api

/**
 * 
 * <button class="veg">veg-1</button>
 * <button class="veg">veg-2</button>
 * <button class="non-veg">non-veg</button>
 * 
 */


// console.log("init....")

// $.on('.veg', 'click', function handleVegEvent(event) {
//    //..
//    console.log('handling event on .veg elements..')
// })
// $.on('.non-veg', 'click', function handleNonVegEvent(event) {
//    //..
//    console.log('handling event on .non-veg elements..')
// })
// console.log("cont..with other work")


//-----------------------------------------------------------------
// Non blocking IO
//-----------------------------------------------------------------

/**
 * 
 *  in browser , IO means HTTP-request, read/write on localstorage,...
 * 
 */


// console.log("init....")

// // e.g IO
// setTimeout(function timeout() {
//    console.log("after timeout...")
// }, 2000);

// console.log("cont..with other work.")
// function longRunning() {
//    var i = 0
//    while (i < 10) {
//       console.log("im long....")
//       i++
//    }
// }
// longRunning() 


//---------------------------------------------
// console.log("int....")

// // e.g IO
// setTimeout(function timeout(e) {
//    console.log("after timeout...")
// }, 0);

// console.log("cont other work..")

// function longRunning() {
//    var i = 0
//    while (i < 10) {
//       console.log("im long....")
//       i++
//    }
// }
// longRunning()
//---------------------------------------------


function teach() {
   let tnr = "Nag" // will moved to heap, end teach scope
   try {
      console.log(tnr + " teching javascript...")
      //  throw new Error('hate-js')

      setTimeout(() => {
         console.log(tnr + " teching react.js")
         // throw new Error('hate-reactjs')
         console.log("teching react.js ends")
      }, 5000); // Event

      console.log("teching javascript ends")
   } catch (e) {
      console.log("i caught " + e.message)
   }
}

teach()
