const Comment = require('./../models/Comment')

//index(lista) show(unico) update destroy store(Criar)

module.exports = {
    async index(request, response) {
        const comments = await Comment.find({
            status: "active"
        }, (err) => {
            if(err) return response.status(400).json({
                error: true,
                message: "Não foi possível listar os comentários"
            });            
        })
        return response.json(comments)
    },

    async store(request, response) {

        const { author, status, comments } = request.body
    
        await Comment.create({
            author,
            status,
            comments,
            created: new Date()
        }, (err) => {
            if(err) return response.status(400).json({
                error: true,
                message: "Não foi possível cadastrar o comentário"
            });

            return response.json("Comentário cadastrado com sucesso!")
        })
        return response.json("Comentário cadastrado com sucesso!")
    },

    async update(request, response) {

        const { _id, comments } = request.body
    
        await Comment.updateOne(
            { _id },
            [ { $set: { comments } } ],
            (err) => {
                if(err) return response.status(400).json({
                    error: true,
                    message: "Não foi possível alterar o comentário!"
                });
        
                return response.json("Comentário alterado com sucesso!");
            }
        )
    },

    async destroy(request, response) {
        const _id = request.body

        await Comment.deleteOne({ _id }, (err) => {
            if(err) return response.status(400).json({
                error: true,
                message: "Não foi possível excluir o comentário"
            });
    
            return response.json("Comentário excluido com sucesso!");
        });
    }
}