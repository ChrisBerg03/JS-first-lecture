// some dodgy code
try {
    // const url = "someurl.com";
    // url = "blablabla.com";
    const input = "chris";
    if (input.length < 10) {
        throw new Error("too short");
    }
} catch (error) {
    console.log(error, "Something went wrong");
} finally {
    console.log("some important code that MUST run");
}

// something goes wrong --> do something
