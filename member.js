function skillsMember(){
    return (
        restrict = 'E',
        templateUrl = 'views/skills-member.html',
        controller = 'skillsMemberCtrl',
        controllerAs = 'vm',
        bindToController = true,
        scope = {
            member: '='
        }
    )
}