@activities.each do |activity|
  json.set! activity.id do
    json.partial! "api/activities/activity", activity: activity
  end
end
