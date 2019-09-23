app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));
app.get('*.*', express.static(join(app, 'browser')));

export { AppServerModule } from './app/app.server.module';

