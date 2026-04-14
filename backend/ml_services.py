import sys
import os

# To easily import from ml-models at the root level during local execution
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'ml-models')))

from models import NLPModel, RecommendationModel, VirtualTryOnModel, PricePredictorModel

nlp_engine = NLPModel()
recommendation_engine = RecommendationModel()
try_on_engine = VirtualTryOnModel()
price_engine = PricePredictorModel()

def process_smart_search(query: str):
    intent = nlp_engine.extract_intent(query)
    # Theoretically would vector search DB based on extracted intent
    return intent

def generate_user_feed(preference: str):
    return recommendation_engine.get_outfits(preference)

def execute_virtual_try_on(user_image: str, product_id: int):
    return try_on_engine.generate_try_on(user_image, product_id)

def get_price_prediction(product_id: int):
    return price_engine.predict_optimal_buy_time(product_id)
