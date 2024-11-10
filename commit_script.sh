#!/bin/bash

# Define the start and end dates
start_date="2023-12-31"
end_date="2024-11-08"

# Loop through each day in the date range
current_date="$start_date"
while [ "$current_date" != "$(date -I -d "$end_date + 1 day")" ]; do
  # Set the commit message and date
  commit_message="Commit for $current_date"
  GIT_COMMITTER_DATE="$current_date 12:00:00" git commit --allow-empty -m "$commit_message" --date "$current_date 12:00:00"
  
  # Move to the next day
  current_date=$(date -I -d "$current_date + 1 day")
done

# Push the commits to the remote repository
git push origin master