const generateTeam = (team) => {
    const engineerCard = (eng) => { `
<div class="card m-5">
                <header class="card-header">
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${eng.getName()}
                    </p>
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${eng.getRole()} <i class="fa-solid fa-code ml-2"></i>
                    </p>
                </header>
                <div class="card-content has-background-white-ter">
                    <div class="content">
                        <table class="table is-bordered is-hoverable">
                            <thead>
                                <tr>
                                    <th>ID: ${eng.getId()}</th>
                                </tr>
                                <tr>
                                    <th>Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></th>
                                </tr>
                                <tr>
                                    <th>GitHub: <a href="https://www.github.com/${eng.getGitHub()}">${eng.getGitHub()}</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
`
}

}


// module.exports = { engineerCard }