#encoding: utf-8
# MIT License
# Made with Love
# Lucas Inacio de Souza, aka, Kbooz

require 'nokogiri'
require 'open-uri'

system('cls')

file = File.open("in.txt","r")

pages= []
file.each{|line|
if(line!="\n")
	pages << line.gsub("\n","")
end
}

count=0

pages.each{ |pg|
	page = Nokogiri::HTML(open("https://www.pinterest.com"+pg))
	img = page.css("img.pinImage")
	img = img[0]["src"]
	puts "#{pg} - #{count}.png"
	open("#{count}.png", 'wb') do |file|
	  file << open(img).read
	end
	count+=1
}