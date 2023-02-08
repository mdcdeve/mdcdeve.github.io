import tweepy

# Authenticate to Twitter API
auth = tweepy.OAuthHandler("CONSUMER_KEY", "CONSUMER_SECRET")
auth.set_access_token("ACCESS_TOKEN", "ACCESS_TOKEN_SECRET")

# Create API object
api = tweepy.API(auth)

# Get the tweet
tweet = api.get_status("TWEET_ID")

# Print the number of likes
print("Number of likes:", tweet.favorite_count)
