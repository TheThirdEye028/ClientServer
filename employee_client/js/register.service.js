app.service('registerService', ['$http', function($http) {
    this.images = [];
    this.posts = [];
    this.name = "";
    this.age = 0;
    this.id = 0;

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