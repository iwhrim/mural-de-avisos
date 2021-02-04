module.exports = {
    posts: [
        {
            id: 'qwe123',
            title: 'Teste do mural',
            description: 'Descrição do mural'
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({id: generateId(), title, description});
    },

    deletePost(id) {
        this.posts.pop(id);
    }

}

function generateId() {
    return Math.random().toString(36).substring(2,9);
}