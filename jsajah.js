document.addEventListener("DOMContentLoaded", function() {

    window.loadForum = function(forumId) {
        var forums = document.querySelectorAll('.husea');
        forums.forEach(function(forum) {
            forum.classList.remove('active');
        });

        var selectedForum = document.getElementById(forumId);
        if (selectedForum) {
            selectedForum.classList.add('active');
        }
    };

    window.loadForum('newsForum');
});
