from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:pk>/vacancies/', views.company_vacancy),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:pk>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.vacancy_top_ten),
]