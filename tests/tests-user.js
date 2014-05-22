(function() {

	module( 'User Model Tests' );

	// var testDate = new Date();

	var testData = {
		ID: '1',
		username: 'author',
		email: 'author@example.com',
		password: 'password',
		name: 'First Last',
		first_name: 'First',
		last_name: 'Last',
		nickname: 'nick',
		slug: 'nick',
		URL: 'http://example.com',
		// avatar: '',

	}

	test( 'User model can be instantiated with correct default values', function() {

		// Number of Assertions we Expect
		expect( 12 );

		var user = new wp.api.models.User();

		equal( user.get('ID'), null, 'Default ID should be null' );
		equal( user.get('username'), '', 'Default ID should be empty' );
		equal( user.get('email'), '', 'Default email should be empty' );
		equal( user.get('password'), '', 'Default password should be empty' );
		equal( user.get('name'), '', 'Default name should be empty' );
		equal( user.get('first_name'), '', 'Default first name should be empty' );
		equal( user.get('last_name'), '', 'Default last name should be empty' );
		equal( user.get('nickname'), '', 'Default nickname should be empty' );
		equal( user.get('slug'), '', 'Default slug should be empty' );
		equal( user.get('URL'), '', 'Default URL should be empty' );
		equal( user.get('avatar'), '', 'Default avatar should be empty' );
		deepEqual( user.get('meta'), { links: {} } );

	} );

}());