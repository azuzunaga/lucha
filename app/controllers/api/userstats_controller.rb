class Api::UserstatsController < ApplicationController
  def index
    @week_stats = week_stats
    @user_stats = user_stats

  end

  def user_stats
    last_activity = Activity.
      where("user_id = :id", id: current_user.id).
      order(start_datetime: :desc).
      first

    title = last_activity.title
    date = last_activity.start_datetime

    total_runs = Activity.
      where("user_id = :id AND sport = :sport", id: current_user.id, sport: "running").size
    total_rides = Activity.
      where("user_id = :id AND sport = :sport", id: current_user.id, sport: "bicycling").
      size

    user_stats = {
      name: current_user.first_name + " " + current_user.last_name,
      last_activity_title: title,
      last_activity_date: date,
      total_runs: total_runs,
      total_rides: total_rides
    }

    user_stats
  end

  def week_stats
    today = Time.now
    prev_monday = today - ((today.wday-1) % 7)*24*60*60 - today.hour*60*60 - today.min*60 - today.sec

    weekly_activities = Activity.where("user_id = :id AND start_datetime >= :start AND start_datetime <= :end",
                     id: 2,
                     start: prev_monday,
                   end: today)

    runs = weekly_activities.where("sport = :sport", sport: "running")
    total_run_miles = runs.pluck('distance').reduce(0, :+)
    total_run_duration = runs.pluck('duration').reduce(0, :+)
    total_run_elevation = runs.pluck('elevation').reduce(0, :+)

    rides = weekly_activities.where("sport = :sport", sport: "bicycling")
    total_ride_miles = rides.pluck('distance').reduce(0, :+)
    total_ride_duration = rides.pluck('duration').reduce(0, :+)
    total_ride_elevation = rides.pluck('elevation').reduce(0, :+)

    week_stats = {
      total_run_miles: total_run_miles,
      total_run_duration: total_run_duration,
      total_run_elevation: total_run_elevation,
      total_ride_miles: total_ride_miles,
      total_ride_duration: total_ride_duration,
      total_ride_elevation: total_ride_elevation
    }

    week_stats
  end
end
