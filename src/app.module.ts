import { MiddlewareConsumer, Module } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';

@Module({
  imports: [ProductModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(ProductController);
  }
}
