import { View } from "../../types/view.class";

const args = {
    name: 'dashboard',
    template: `
        <h2>My Dashboard</h2>
        <hr>
        <div class="dashboard-content" id="dashboard-content"> 
            <div class="dashboard-card demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Choose Your Destination: </h2>
                </div>
                <div class="dashboard-button-container mdl-card__actions mdl-card--border">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigateTrainings()">View Trainings</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigateContracts()">View Contracts</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigateSecurityGroups()">View Groups</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigateSecurityGroups()">Change Password</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.logout()">Logout</button>
                </div>
            </div>    
        </div>
    `,
    anchorElementId: 'main-content'
}

export const dashboardView = new View(args.name, args.template, args.anchorElementId);
