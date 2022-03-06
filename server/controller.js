const goobers = []
let globalID = 0;

module.exports = {

    register: (req, res) =>{
        console.log("Registering Goober");
        let email = req.body.email;
        let emailArr = email.split('');
        if (!emailArr.includes('@')){
            res.status(400).send('Invalid email');
        }
        else{
        let newGoober = req.body;
        newGoober.id = globalID;
        goobers.push(req.body);
        console.log(goobers);
        res.status(200).send(req.body);
        globalID++;
        }
    },

    update: (req, res) => {
        console.log("Updating Goober");
        console.log(req.body);

        console.log(req.params);
        let {id} = req.params;
        console.log(id);
        let index = goobers.findIndex(goober => +goober.id === +id)
        console.log(index);
         const {firstName, lastName, email} = req.body;

        goobers[index].firstName = firstName;
        goobers[index].lastName = lastName;
        goobers[index].email = email;

        console.log(`first name updated to: ${firstName}`);
        console.log(`last Name name updated to: ${lastName}`);
        console.log(`email updated to: ${email}`)
        res.status(200).send(req.body);

    },
    deleteGoober: (req, res) =>{
        console.log("Deleting Goober");
        let {id} = req.params;
        let index = goobers.findIndex(goober => +goober.id === +id)
        goobers.splice(index, 1);
        console.log(req.params);
        res.status(200).send(id);
    }
}