app.service('registerService', ['$http', function($http) {
    this.images = [];
    this.name = "";
    this.age = 0;
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    this.updateImages = function(nImage) {
        this.images.push(nImage);
    };

    this.updateInfo = function(name, age) {
        this.name = name;
        this.age = age;
    };

    this.postData = function() {
        return $http.post('/upload', { name: this.name, images: this.images });
    };
}]);