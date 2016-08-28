app.service('registerService', ['$http', function($http) {
    this.images = [];
    this.posts = [];
    this.name = "";
    this.age = 0;
<<<<<<< HEAD
    this.id = 0;
=======
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
>>>>>>> 287c8d4b8d5978c8ee24a26e2eca591ff89ab303

    this.updateImages = function(nImage) {
        this.images.push(nImage);
    };

    this.updateInfo = function(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    };

    this.updatePosts = function(posts) {
        this.posts = posts.slice();
    };

    this.postData = function() {
        return $http.post('/upload', {'id': this.id, 
                                      'name': this.name, 
                                      'age': this.age,
                                      'images': this.images,
                                      'posts': this.posts});
    };
}]);