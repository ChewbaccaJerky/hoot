require 'rails_helper'

RSpec.describe User, :type => :models do
    let(:user){User.new(username: 'Chewbacca', email: 'test@gmail.com', first_name: 'chew', last_name: 'bacca', password: 'password')}
    
    it "has valid credentials" do
        expect(user.save).to be(true)
    end

    it "is valid without username" do
        user[:username] = nil
        expect(user.save).to be(false)
    end

    it "is valid without email" do
        user[:email] = nil
        expect(user.save).to be(false)
    end

    it "is valid without first name" do
        user[:first_name] = nil
        expect(user.save).to be(false)
    end

    it "is valid without last name" do
        user[:last_name] = nil
        expect(user.save).to be(false)
    end
end