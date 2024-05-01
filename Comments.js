function solve(list) {

    function joinNames(name) {
        return name.join(' ')
    }


    const output = {
        users: [],
        articles: [],
        comments: {}
    }

    list.forEach(item => {
        let [command, ...data] = item.split(' ')
        data = joinNames(data)
        if (command === 'article' && !output.articles.includes(data)) {
            output.articles.push(data)

        } else if (command === 'user' && !output.users.includes(data)) {
            output.users.push(data)

        } else {
            let [userData, articleData] = item.split(': ')
            let [userName, ...articleName] = userData.split(' posts on ')
            let [articleTitle, ...articleComment] = articleData.split(', ')

            articleName = joinNames(articleName)
            articleComment = joinNames(articleComment)

            if (output.users.includes(userName) && output.articles.includes(articleName)) {
                if (!output.comments.hasOwnProperty(articleName)) {
                    output.comments[articleName] = {}
                    output.comments[articleName].userWithComments = []
                }
                output.comments[articleName].userWithComments.push({
                    userName: userName,
                    title: articleTitle,
                    comment: articleComment
                })
            }
        }
    })

    const sortedArticles = output.articles.sort((a, b) => {
        const aComments = output.comments[a].userWithComments.length;
        const bComments = output.comments[b].userWithComments.length;
        return bComments - aComments;
    })

    sortedArticles.forEach(article => {
        const comments = output.comments[article].userWithComments;
        if (comments.length) {
            console.log(`Comments on ${article}`)
            comments.sort((a, b) => a.userName.localeCompare(b.userName)).forEach(comment => {
                console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.comment}`)
            })
        }
    })
}
solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])