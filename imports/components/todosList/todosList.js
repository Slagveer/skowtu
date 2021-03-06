import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';

import template from './todosList.html';

class TodosListCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        this.tasks = [{
            text: 'This is task 1'
        }, {
            text: 'This is task 2'
        }, {
            text: 'This is task 3'
        }];
        this.helpers({
            tasks() {
                return Tasks.find({});
            }
        });
    }
}

export default angular.module('todosList', [
    angularMeteor
])
    .component('todosList', {
        templateUrl: 'imports/components/todosList/todosList.html',
        controller: TodosListCtrl
    });