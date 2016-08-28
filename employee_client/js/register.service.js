app.service('registerService', ['$http', function($http) {
    this.images = [];
    this.name = "";
    this.age = 0;

    this.updateImages = function(nImage) {
        this.images.push(nImage);
    };

    this.updateInfo = function(name, age) {
        this.name = name;
        this.age = age;
    };

    this.postData = function() {
        images.map(function(image) {
            
        });
        return $http.post('/upload', {'name': this.name, 'age': this.age,'images': this.images});
    };
}]);