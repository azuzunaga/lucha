@routes.each do |route|
  json.set! route.id do
    json.partial! "api/routes/route", route: route
  end
end
