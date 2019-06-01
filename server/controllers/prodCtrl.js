module.exports = {
    getProd: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        dbInstance
            .getAllProductsByUser([params.id])
            .then(prod => res.status(200).json(prod))
            .catch(err => res.status(500).console.log(err));
    },
    getAllProd: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;
        dbInstance
            .getAllProducts()
            .then(prod => res.status(200).json(prod))
            .catch(err => res.status(500).console.log(err));
    },
    //create new prod
    // createProd: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params, body } = req;

    //     dbInstance
    //         .createProduct([params.id, body.name])
    //         .then(() => res.status(200).json())
    //         .catch(() => res.status(500).json());
    // },

    // deleteProd: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     const { params } = req;
    //     console.log(params);
    //     dbInstance
    //         .deleteProduct([params.id])
    //         .then(() => res.status(200).json())
    //         .catch(err => console.log(err));
    // },
    // changeName: (req, res, next) => {
    //     const dbInstance = req.app.get("db");
    //     // console.log("this", req.user);
    //     req.user.name = req.body.name;
    //     const { params, body } = req;
    //     // console.log(params.id, body);
    //     dbInstance
    //         .changeProdName([params.id, body.name])
    //         .then(() => res.status(200).json())
    //         .catch(err => console.log(err));
    // }
};