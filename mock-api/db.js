const faker = require('faker')

module.exports = function () {
    const data = { posts: [] }

    for (let i = 0; i < 5; i++) {
        data.posts.push({
            id: faker.random.uuid(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            date: faker.date.past().getTime(),
        })
    }

    return data
}