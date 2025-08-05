( function connectionOne() {
    console.log("DB Connected Sucessfully");
})();  //named iife

( (name) => {
    console.log(`DB2 Connected Succesfully , ${name}`);
})("Azaan Manzoor");  //unnamed iife