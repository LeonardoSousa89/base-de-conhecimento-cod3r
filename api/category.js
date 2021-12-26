module.exports = app => {
    const { existsOrError, notExixtsOrError } = app.api.validation

    const save = (req, res) => {
        const category = { ...req.body }
        if(req.params.id) category.id = req.params.id

        try{
            existsOrError(category.name, 'Nome não informado')
        }catch(msg){
            return res.status(400).send(msg)
        }

        if(category.id){
            
        }
    }
}