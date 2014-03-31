
function InstaBoxer() {
	this.instaData = {};	
	this.accessToken = "268284987.c171e68.116f34f427994b90acd1b2b3701367f0";
	this.imageUrls = [];
		
	this.initInstagrams = function(callback) {
		var me = this;
		var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + this.accessToken;

		$.ajax({
		  type:     "GET",
		  url:      url,
		  dataType: "jsonp",
		  success: function(data) {
		    me.instaData = data;
		    me.formatInstagrams(callback);
		  }
		});	
	}

	this.formatInstagrams = function(callback) {
		var me = this;
		this.instaData.data.forEach(function(entry) {
			me.imageUrls.push({
				url: entry.images.standard_resolution.url, 
				class: 'w' + (Math.round(Math.random() * 2)).toString()});
		});
		callback(this.imageUrls);
	}
}


