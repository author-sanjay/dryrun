from bs4 import BeautifulSoup
import pandas as pd




import requests


url="https://leetcode.com/problemset/all/?page=5"
#print(url[4])
questionname=[]
questionurl=[]
question=[]
questionlevel=[]


print(url)


  



def getalllink():
  response = requests.get(url)   #to find all the links on webpage

# to get the source code of the page 
  data = response.text

# to get it clear
  soup = BeautifulSoup(data,'html.parser')
  tags = soup.find_all("a")
  #to find all the links with class name "result-title" on webpage
  titles = soup.find_all("a",{"class":"h-5 hover:text-blue-s dark:hover:text-dark-blue-s"})

  print("--------------------------All the link with the class name result-title------------------------------")
#Finding all titles 
  for title in titles:
    print("https://leetcode.com"+title.get('href'))

	
getalllink()
